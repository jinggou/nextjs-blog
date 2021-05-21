import React from "react";
import { FormGroup, FormLabel, FormControl, InputGroup } from "react-bootstrap";
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import CONST from '../const';

function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormGroup className="mb-3">
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <InputGroup>
        <FormControl type="text" {...field} {...props} />
      </InputGroup>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormGroup>
  );
}

function PasswordInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormGroup className="mb-3">
      <FormLabel htmlFor={props.id || props.name} className="d-flex">
        {label}
        <a href={CONST.LINKS.SIGNUP} className="ml-auto sm-text">
          Forget password?
        </a>
      </FormLabel>
      <InputGroup>
        <FormControl type="password" {...field} {...props} />
      </InputGroup>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormGroup>
  );
}

function NewPasswordInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormGroup className="mb-3">
      <FormLabel htmlFor={props.id || props.name} className="d-flex">
        {label}
      </FormLabel>
      <InputGroup>
        <FormControl type="password" {...field} {...props} />
      </InputGroup>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormGroup>
  );
}

function SearchInput(props) {
  const [field] = useField(props);
  return (
    <FormGroup>
      <FormControl
        id="search-bar"
        type="text"
        autoComplete="off"
        aria-live="polite"
        {...field}
        {...props}
      />
    </FormGroup>
  );
}

function EmailInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormGroup className="mb-3">
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <InputGroup>
        <FormControl type="text" {...field} {...props} />
        <InputGroup.Append>
          <InputGroup.Text id="email-domain">
            {CONST.EMAIL_DOMAIN}
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormGroup>
  );
}

function SelectInput({ label, ...props }) {
  const options = CONST.BOOK_INITIAL_STATUS;
  const [field, meta] = useField(props);
  return (
    <FormGroup className="mb-3">
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <InputGroup>
        <FormControl as="select" {...field} {...props}>
          {options.map(({ value, label }, index) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </FormControl>
      </InputGroup>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormGroup>
  );
}

function SubmitButton({ text, ...props }) {
  return (
    <button className="btn btn-success btn-block mt-5" type="submit" {...props}>
      {text}
    </button>
  );
}

function Header({ text, ...props }) {
  return (
    <h4 className="form-header mb-4 mt-5" {...props}>
      {text}
    </h4>
  );
}

function SignupForm({ header }) {
  return (
    <div className="form px-3">
      <Header text={header} />
      <Formik
        initialValues={{
          signupEid: "",
          signupEmail: "",
        }}
        validationSchema={Yup.object({
          signupEid: Yup.string()
            .min(4, "Invalid EID")
            .max(9, "Invalid EID")
            .required("Required"),
          signupEmail: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const submitData = {
              signupEid: values.signupEid,
              signupEmail: values.signupEmail + CONST.EMAIL_DOMAIN,
            };
            alert(JSON.stringify(submitData, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form-body mt-3">
          <TextInput label="EID" name="signupEid" />
          <EmailInput label="Email address" name="signupEmail" />
          <SubmitButton text="Create account" />
        </Form>
      </Formik>
    </div>
  );
}

function SigninForm() {
  return (
    <div className="form px-3">
      <Header text="Sign in" />
      <Formik
        initialValues={{
          signinEid: "",
          signinPassword: "",
        }}
        validationSchema={Yup.object({
          signinEid: Yup.string().required("Required"),
          signinPassword: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form-body mt-3">
          <TextInput label="EID" name="signinEid" />
          <PasswordInput label="Password" name="signinPassword" />
          <SubmitButton text="Sign in" />
        </Form>
      </Formik>
      <p className="signin-callout mt-3">
        New to E-Library?
        <a href={CONST.LINKS.SIGNUP}> Create an account!</a>
      </p>
    </div>
  );
}

function SearchForm() {
  return (
    <div className="px-3">
      <Formik
        initialValues={{
          searchKeywords: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const submitData = {
              searchKeywords: values.searchKeywords.split(" "),
            };
            alert(JSON.stringify(submitData, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="d-flex" id="search-form">
          <SearchInput
            name="searchKeywords"
            placeholder="Search by name or ISBN..."
          />
          <button
            className="btn btn-success"
            id="search-btn"
            aria-label="search"
            type="submit"
          >
            <i className="bi bi-search" />
          </button>
        </Form>
      </Formik>
    </div>
  );
}

function ChangePasswordForm() {
  return (
    <div className="form px-3">
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          newPassword: Yup.string()
            .min(8, "Password is too short (minimum is 8 characters)")
            .max(16, "Password is too long (maximum is 16 characters)")
            .required("Required"),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("newPassword"), null],
            "Passwords does not match"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form-body mt-4">
          <h4 className="text-left mb-5">Change password</h4>
          <PasswordInput label="Old password" name="oldPassword" />
          <NewPasswordInput label="New password" name="newPassword" />
          <NewPasswordInput
            label="Confirm new password"
            name="confirmPassword"
          />
          <SubmitButton text="Update password" />
          <hr className="mt-4" />
          <button className="btn btn-outline-dark btn-block mt-4">
            Logout
          </button>
        </Form>
      </Formik>
    </div>
  );
}

function BookForm({ header }) {
  return (
    <div className="form px-3">
      <Header text={header} />
      <Formik
        initialValues={{
          title: "",
          author: "",
          publisher: "",
          year: "",
          isbn: "",
          status: "available",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          author: Yup.string().required("Required"),
          year: Yup.string()
            .matches(/^[0-9]+$/, "Should be year")
            .min(4, "Invalid year")
            .max(4, "Invalid year"),
          isbn: Yup.string()
            .required("Required")
            .matches(/^[0-9]+$/, "Should be number")
            .min(10, "Invalid length")
            .max(13, "Invalid length"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form-body mt-3">
          <TextInput label="Title" name="title" />
          <TextInput label="Author" name="author" />
          <TextInput label="Publisher" name="publisher" />
          <TextInput label="Publication year" name="year" />
          <TextInput label="ISBN" name="isbn" />
          <SelectInput label="Status" name="status" />
          <SubmitButton text="Create account" />
        </Form>
      </Formik>
    </div>
  );
}

export { SignupForm, SigninForm, SearchForm, ChangePasswordForm, BookForm };
