import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface MyProps {
  name: string;
  field: string;
  mail: string;
  phone: string;
  message: string;
  title?: string;
  emailSubject: string;
}

const ApplyNowEmail = ({ name, mail, phone, message, field, title, emailSubject }: MyProps) => (
  <Html>
    <Head />
    <Preview>{emailSubject}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Column>
            <Img
              style={sectionLogo}
              src='https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/Save-Max-Westcoast-Realty.png'
              width='155'
              height='50'
              alt='Google Play'
            />
          </Column>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>{emailSubject}</Text>
          <Text style={paragraph}>Hello Save Max Westcoast Realty Inc,</Text>
          <Text style={paragraph}>
            A new form submission has been received with the following details:
          </Text>
          <Text style={paragraph}>Client Name: {name}</Text>
        </Section>
        <Section style={paragraphList}>
          <Text style={paragraph}>Email Address: {mail}</Text>
          {phone && <Text style={paragraph}>Phone Number: {phone}</Text>}
          {field && <Text style={paragraph}>Field: {field}</Text>}
          {title && <Text style={paragraph}>Question Title: {title}</Text>}
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>Queries: {message}</Text>
          <Hr style={hr} />
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>
            Please review the provided information and take appropriate action
            as necessary.
          </Text>
          <Hr style={hr} />
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Thank you,</Text>
          <Text style={{ ...paragraph, fontSize: '20px', ...headerBlue }}>
            {name}
          </Text>
        </Section>
        <Section style={containerContact}>
          <Row
            align='left'
            style={{
              width: '84px',
              float: 'left',
            }}
          >
            <Img
              width='380'
              height='110'
              src='https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/Save-Max-Westcoast-Realty.png'
            />
          </Row>
        </Section>
        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: '12px',
              textAlign: 'center',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Save Max Unit 288, 12899 76 Avenue
            Surrey. BC. V3W1E6
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
export default ApplyNowEmail;
const main = {
  backgroundColor: '#dbddde',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: '0 40px',
};

const headerBlue = {
  color: '#0F2650',
};

const container = {
  margin: '30px auto',
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
};

const containerContact = {
  backgroundColor: '#f0fcff',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  paddingLeft: '20px',
};

const heading = {
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#004dcf',
};

const paragraphContent = {
  padding: '0 40px',
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#3c4043',
};

const link = {
  ...paragraph,
  color: '#004dcf',
};

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
};
