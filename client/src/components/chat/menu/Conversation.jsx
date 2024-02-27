import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";
const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;
const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
});

const Container1 = styled(Box)`
  display: flex;
`;

const Conversation = ({ user }) => {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversation = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversation();
  }, []);
  // newMessageFlag stack limit

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Component
      onClick={() => {
        getUser();
      }}
    >
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box>
        <Container1>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <Typography>{formatDate(message?.timestamp)}</Typography>
          )}
        </Container1>
        <Box>
          <Typography>
            {message?.text?.includes("localhost") ? "media" : message.text}
          </Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;
