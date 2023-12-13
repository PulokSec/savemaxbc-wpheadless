import {
  Body,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface MyProps {
  name: string;
  field: string;
  mail: string;
  phone: string;
  referred?: string;
  message: string;
}

export const ApplyNowEmail = ({
  name,
  mail,
  phone,
  message,
  field,
}: MyProps) => (
  <Html>
    <Head />
    <Preview>New Form Submission: {name}</Preview>
    <Body style={main}>
      <Heading style={h1}>New Form Submission: {name}</Heading>

      <Text style={{ ...text, marginBottom: '14px' }}>Dear Save Max,</Text>
      <Text style={{ ...text, marginBottom: '14px' }}>
        A new form submission has been received with the following details:
      </Text>
      <Text style={{ ...text, marginBottom: '10px' }}>
        <Text style={{ ...span }}>Name: </Text>
        {name}
      </Text>
      <Text style={{ ...text, marginBottom: '10px' }}>Email: {mail}</Text>
      {phone?.length > 0 && (
        <Text style={{ ...text, marginBottom: '10px' }}>
          <Text style={{ ...span }}>Phone:</Text> {phone}
        </Text>
      )}
      {field?.length > 0 && (
        <Text style={{ ...text, marginBottom: '10px' }}>
          <Text style={{ ...span }}>Field:</Text> {field}
        </Text>
      )}
      <Text style={{ ...text, marginBottom: '14px' }}>
        <Text style={{ ...span }}>Message:</Text> {message}
      </Text>
      <Text style={{ ...text, marginBottom: '14px' }}>
        Please review the provided information and take appropriate action as
        necessary.
      </Text>

      <Text style={footer}>Best regards,</Text>
      <Text style={footer}>{name}</Text>
    </Body>
  </Html>
);

export default ApplyNowEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  // width: "100%",
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '10px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '5px 0',
};
const span = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  fontWeight: 'bold',
};

const footer = {
  color: 'blueviolet',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
