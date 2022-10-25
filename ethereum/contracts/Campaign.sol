// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CampaignFactory {
    address[] deployedCampaigns;

    function createCampaign(uint minimum) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(address(newCampaign));
    }

    function getDeployedCampaigns() public view returns(address[] memory){
        return deployedCampaigns;
    }

}

contract Campaign {
    // struct definition not instance
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) voted;
    }

    address public manager;
    uint public minContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Request[] public requests;

    modifier restricted() {
        // enforces security that ONLY the manager can call function
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator) {
        manager = creator;
        minContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string memory description, uint value, address payable recipient)
        public restricted {
            Request storage newRequest = requests.push();

            newRequest.description = description;
            newRequest.value = value;
            newRequest.recipient = recipient;
            newRequest.complete = false;
            newRequest.approvalCount = 0;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.voted[msg.sender]);

        request.voted[msg.sender] = true;
        request.approvalCount++;
    }

    function finaliseRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));

        request.recipient.transfer(request.value);
        request.complete = true;
    }

}