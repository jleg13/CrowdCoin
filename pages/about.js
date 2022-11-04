import React from "react";
import { Grid, Button } from "semantic-ui-react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <h1 className="Heading">About Crowd Coin:</h1>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={10}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
              quam viverra nec consectetur ante hendrerit. Donec et mollis
              dolor. Praesent et diam eget libero egestas mattis sit amet vitae
              augue. Nam tincidunt congue enim, ut porta lorem lacinia
              consectetur. Donec ut libero sed arcu vehicula ultricies a non
              tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed,
              adipiscing id dolor. Pellentesque auctor nisi id magna consequat
              sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt
              feugiat nisl imperdiet. Ut convallis libero in urna ultrices
              accumsan. Donec sed odio eros. Donec viverra mi quis.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Link href="/">
              <Button floated="right" content="Back to Campaigns" primary />
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}
