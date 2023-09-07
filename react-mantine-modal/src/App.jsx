// src/App.js
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Checkbox,
  Button,
  Group,
  Switch,
  MantineProvider,
} from "@mantine/core";
import "./App.css";

function CheckboxComponent({ title }) {
  return (
    <div>
      <div
        style={{
          margin: "10px 0",
          fontFamily: "sans-serif",
          fontWeight: "bold",
        }}
      >
        {title}:
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Checkbox
            className="checkbox-wrapper"
            checked
            label="Linkedin Bio"
            color="green"
          />
          <Checkbox
            className="checkbox-wrapper"
            checked
            label="Years of experience"
            color="green"
          />
          <Checkbox
            className="checkbox-wrapper"
            checked
            label="Current Experience"
            color="green"
          />
        </div>
        <div>
          <Checkbox
            className="checkbox-wrapper"
            label="List of past jobs"
            color="green"
          />
          <div
            style={{ display: "flex", fontSize: "14px", alignItems: "center" }}
          >
            <Checkbox
              className="checkbox-wrapper"
              disabled
              label="Current job description"
              color="green"
            />
            <div
              style={{
                padding: "1px 10px",
                borderRadius: "10px",
                color: "#cb3838",

                background: "#ffe0e6",
              }}
            >
              Disabled
            </div>
          </div>
          <div
            style={{ display: "flex", fontSize: "14px", alignItems: "center" }}
          >
            <Checkbox
              disabled
              className="checkbox-wrapper"
              label="Current job specialities"
              color="green"
            />
            <div
              style={{
                padding: "1px 10px",
                borderRadius: "10px",
                color: "#cb3838",
                background: "#ffe0e6",
              }}
            >
              Disabled
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [opened, { open, close }] = useDisclosure(false);

  const [isCentered, setIsCentered] = useState(true);

  return (
    <>
      <MantineProvider
        theme={{
          fontFamily: "Verdana, sans-serif",
          fontFamilyMonospace: "Monaco, Courier, monospace",
          headings: { fontFamily: "Greycliff CF, sans-serif" },
        }}
      >
        <Modal.Root size="xl" opened={opened} onClose={close} centered>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Header style={{ background: "#40c057", color: "white" }}>
              <Modal.Title>Personalization Settings</Modal.Title>
              <Switch
                color="white"
                checked={true}
                labelPosition="left"
                label="Use Account Research"
              />
            </Modal.Header>
            <Modal.Body>
              <CheckboxComponent title="Profile" />
              <hr />
              <CheckboxComponent title="Account" />
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>

        <Group position="center">
          <Button onClick={open}>Open modal</Button>
        </Group>
      </MantineProvider>
    </>
  );
}

export default App;
