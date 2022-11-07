// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CampaignFactory {
    address[] deployedCampaigns;
    event CampaignCreated(address campaignAddress);

    function createCampaign(string memory name, string memory description, uint goal, uint minimum) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender, name, description, goal);
        deployedCampaigns.push(address(newCampaign));
        emit CampaignCreated(address(newCampaign));
    }

    function getDeployedCampaigns() public view returns(address[] memory){
        return deployedCampaigns;
    }
}

contract Campaign {
    // struct definition not instance
    struct Request {
        string name;
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    address public manager;
    string public campaignName;
    string public campaignDescription;
    uint public campaignGoal;
    uint public minContribution;
    uint public contributionCount;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Request[] public requests;
    uint public totalRaised;

    modifier restricted() {
        // enforces security that ONLY the manager can call function
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator, string memory name, string memory description, uint goal) {
        minContribution = minimum;
        manager = creator;
        campaignName = name;
        campaignDescription = description;
        campaignGoal = goal;
        totalRaised = 0;
    }

    function contribute() public payable {
        bool isApprover = approvers[msg.sender];

        if (!isApprover) {
            require(msg.value > minContribution);
            approvers[msg.sender] = true;
            approversCount++;
        }
        totalRaised += msg.value;
        contributionCount++;
    }

    function createRequest(string memory name, string memory description, uint value, address payable recipient)
        public restricted {
            // only let requests to be created once campaign is funded
            require(address(this).balance >= campaignGoal);
            Request storage newRequest = requests.push();

            newRequest.name = name;
            newRequest.description = description;
            newRequest.value = value;
            newRequest.recipient = recipient;
            newRequest.complete = false;
            newRequest.approvalCount = 0;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function hasApproved(address sender, uint index) public view returns(bool) {
       return requests[index].approvals[sender];
    }

    function finaliseRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
        string memory, string memory, uint, uint, uint, uint, uint, uint, uint, address
    ) {
        return (
            campaignName,
            campaignDescription,
            campaignGoal,
            contributionCount,
            minContribution,
            totalRaised,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}
