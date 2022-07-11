import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Button } from 'components/ui/Button';

const Label = styled.label`
  margin-bottom: 10px;
`;

const ContactErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.alert};
  font-size: 10px;
`;

export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  validationSchema = Yup.object({
    name: Yup.string().max(16).required('Please, enter your name.'),
    number: Yup.number().positive().required('Please, enter your number.'),
  });

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={this.handleSubmit}
        validationSchema={this.validationSchema}
      >
        <Form autoComplete="off">
          <Box
            width="400px"
            margin="0 auto"
            display="flex"
            flexDirection="column"
            as="section"
          >
            <Label htmlFor="name">
              Name
              <Field type="text" name="name" />
              <ContactErrorMessage name="name" component="p" />
            </Label>
            <Label htmlFor="number">
              Number
              <Field type="tel" name="number" />
              <ContactErrorMessage name="number" component="p" />
            </Label>
            <Button type="submit">Add contact</Button>
          </Box>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
