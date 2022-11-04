import React from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

export default function Header() {
  return (
    <Menu>
      <Link href="/">
        <Menu.Item header icon="globe" name="Crowd Coin" />
      </Link>
      <Link href="/about">
        <Menu.Item name="about" />
      </Link>
      <Menu.Menu position="right">
        <Link href="/">
          <Menu.Item name="campaigns" />
        </Link>
        <Link href="/campaigns/new">
          <Menu.Item icon="add circle" />
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
