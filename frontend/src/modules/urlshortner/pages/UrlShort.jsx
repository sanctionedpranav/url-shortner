import { Box, Flex, Heading, TextField, Button, Text, Card } from '@radix-ui/themes'
import React, { useRef, useState } from 'react'
import { shortenerApiCall } from '../api/url-api.js';
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons"

const UrlShort = () => {
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);

  const url = useRef();

  const takeUrl = async () => {
    const URL = url.current.value;
    try {
      const response = await shortenerApiCall({ bigUrl: URL });
      console.log("res", response);

      if (response && response.data.shortUrl) {
        setShortUrl(response.data.shortUrl);
        console.log('small url: ', response.data.shortUrl);
      } else {
        console.log('something went wrong.');
      }
    } catch (err) {
      console.log("Problem in short URL", err);

    }
    console.log("URL", URL);
  }

  return (
    <Flex
      height="85vh"
      align="center"
      justify="center"
      direction="column"
      gap="16px"
      style={{ backgroundColor: "#f9f9fb" }}
    >
      <Card
        size="4"
        variant="surface"
        style={{
          width: "100%",
          maxWidth: "420px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)",
        }}
      >
        <Flex direction="column" gap="4">
          <Heading align="center" size="6" weight="bold">
            URL Shortener
          </Heading>

          <Box>
            <Text weight="medium">Enter URL</Text>
            <TextField.Root
              ref={url}
              placeholder="Paste your long URL..."
              type="text"
            />
          </Box>

          <Button onClick={takeUrl} size="3" variant="solid" style={{ width: "100%" }}>
            Shorten URL
          </Button>
        </Flex>
      </Card>

      {
        shortUrl && (
          <Card
            size="3"
            variant="surface"
            style={{
              width: "100%",
              maxWidth: "420px",
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)",
            }}
          >
            <Flex gap="16px">
              <a
                href={shortUrl}
                target="_blank"
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#1a73e8",
                  textDecoration: "none",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flex: 1,
                }}
              >
                {shortUrl}
              </a>

              <Button
                size="1"
                variant="soft"
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                style={{ minWidth: "32px", cursor: "pointer" }}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </Button>
            </Flex>
          </Card>

        )
      }

    </Flex>
  )
}

export default UrlShort