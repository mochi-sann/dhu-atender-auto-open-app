import React from "react";
import Head from "next/head";
import ClassRoomTables from "../component/classroomTable";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>

      <div>
        <Container>
        <Text>
          <Text>てきすと</Text>
          <p>てきすと</p>
          <p>auto saveするのだーーーーーーーー</p>

          <p>テキスト</p>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

          <p>テキストを保存するんやで</p>
          <Box>
            <Heading>いい感じの御台s</Heading>
          </Box>
          <Text>てきすと</Text>
          <ClassRoomTables />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Home;
