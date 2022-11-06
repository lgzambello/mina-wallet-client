import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { convertToUsd } from "../utils/UtilityFunctions";
import { Properties } from "csstype";
import Colors from "../constants/Colors";

enum ProofType {
  BANK_BALANCE,
}

type Proof = {
  proofType: ProofType;
  value: any;
  verified: boolean;
  publicKey: string;
  name: string;
};

const MOCK_DATA: Proof[] = [
  {
    proofType: ProofType.BANK_BALANCE,
    value: 1000000,
    verified: true,
    publicKey: "abc",
    name: "John Smith",
  },
  {
    proofType: ProofType.BANK_BALANCE,
    value: 250000,
    verified: true,
    publicKey: "abd",
    name: "John Smith",
  },
  {
    proofType: ProofType.BANK_BALANCE,
    value: 10000000,
    verified: false,
    publicKey: "adc",
    name: "John Smith",
  },
];

const tableHeaders = ["Proof Type", "Value", "Public Key", "Name", "Verified"];

const InboxView = () => {
  const [proofs, setProofs] = useState<Proof[]>();
  const [searchString, setSearchString] = useState("");

  const getInboxProofs = () => {
    // API CALL HERE
    setProofs(MOCK_DATA);
  };

  useEffect(() => {
    getInboxProofs();
  }, []);

  return (
    <>
      <TextField
        id="standard-basic"
        label="Search by Public Key"
        variant="standard"
        onChange={(event) => setSearchString(event.target.value)}
        value={searchString}
        style={searchStyle}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell style={cellStyle}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {proofs
            ?.filter((proof) => proof.publicKey.includes(searchString))
            .map((proof) => (
              <TableRow>
                <TableCell style={cellStyle}>Bank Account Balance</TableCell>
                <TableCell style={cellStyle}>
                  {convertToUsd(proof.value)}
                </TableCell>
                <TableCell style={cellStyle}>{proof.publicKey}</TableCell>
                <TableCell style={cellStyle}>{proof.name}</TableCell>
                <TableCell style={cellStyle}>
                  {proof.verified ? "Yes" : "No"}
                </TableCell>
              </TableRow>
            ))}
        </Table>
      </TableContainer>
    </>
  );
};

const cellStyle: Properties = {
  borderBottom: "1px solid " + Colors.PRIMARY,
};

const searchStyle: Properties = {
  marginTop: "20px",
  marginBottom: "20px",
  marginLeft: "10px",
};

export default InboxView;
