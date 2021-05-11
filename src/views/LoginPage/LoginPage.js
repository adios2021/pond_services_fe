import React, {useState, useRef, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
	Button,
	Link,
	Typography,
	CircularProgress,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { Page, Loader, NotificationAlert } from '../../components/';

const useStyles = makeStyles(theme => ({
    root: {
			paddingLeft: 100,
			paddingRight: 100,
			paddingBottom: 125,
			flexBasis: 700,
			[theme.breakpoints.down('sm')]: {
				paddingLeft: theme.spacing(2),
				paddingRight: theme.spacing(2),
			}
    },
    title: {
        marginTop: theme.spacing(3),
    },
    error: {
        marginTop: theme.spacing(3),
    },
    textField: {
			marginTop: theme.spacing(2),
    },
    signInButton: {
			margin: theme.spacing(2, 0)
    },
    forgotPassword: {
			float: 'right',
    },
}));

const LoginPage = (props) => {
	const { login } = props;
	const classes = useStyles();
	const form = useRef('form');

	const [ formValues, setFormValues ] = useState({
		email: '',
		password: '',
		submitted: false,
	});

	const [notificationAlertProps, setNotificationAlertProps] = useState({
		message: '',
		type: '',
		open: false,
	});

	
	const { isPending, error } = useSelector(({ AuthPageReducer }) => AuthPageReducer);

	useEffect(() => {
		if (error != null) {
			setNotificationAlertProps({
				message: error.error,
				type: 'error',
				open: true,
				handleNotificationToggle: handleNotificationToggle,
			});
		}
	}, [error])

	
	//closes notification modal
	const handleNotificationToggle = () => {
		setNotificationAlertProps({
			message: '',
			type: '',
			open: false,
		});
	};

	const handleInputChange = async (e) => {
		const {name, value} = e.target;

		setFormValues({
			...formValues, 
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setFormValues({
			...formValues, 
			submitted: false
		});

		login(formValues);
		// console.log('values', formValues)
		// setTimeout(() => setFormValues({
		//     email: '',
		//     password: '',
		//     submitted: false
		// }), 5000)
	};

	return (
		<>
			{isPending && <Loader />}
			<Page title="Sign In" className={classes.root}>
				<ValidatorForm 
					ref={form}
					onSubmit={handleSubmit}
				>
					<Typography className={classes.title} variant="h2">
						Sign In
					</Typography>
					<TextValidator 
						className={classes.textField}
						fullWidth
						label="Email"
						name="email"
						type="text"
						variant="outlined"
						value={formValues.email}
						onChange={handleInputChange}
						validators={['required', 'isEmail']}
						errorMessages={['Email field is required', 'Email is not valid']}
					/>
					<TextValidator 
						className={classes.textField}
						fullWidth
						label="Password"
						name="password"
						type="password"
						variant="outlined"
						value={formValues.password}
						onChange={handleInputChange}
						validators={['required']}
						errorMessages={['Password field is required']}
					/>
					<Button
						className={classes.signInButton}
						color="primary"
						fullWidth
						size="large"
						type="submit"
						variant="contained"
						disabled={formValues.submitted}
					>
						{
							formValues.submitted && 'Your form is submitted!'
							|| !formValues.submitted && 'SIGN IN'
						}
					</Button>

					<Typography color="textSecondary" variant="body1">
						Don't have an account?{' '}
						<Link
							component={RouterLink}
							to="/sign-up" 
							variant="h6"
						>
							Sign up
						</Link>
						<Link
							component={RouterLink}
							className={classes.forgotPassword}
							to="/forgot-password" 
							variant="h6"
						>
							Forgot password
						</Link>

					</Typography>
				</ValidatorForm>
				<NotificationAlert {...notificationAlertProps} />
			</Page>
		</>
	);
}

LoginPage.propTypes = {
	history: PropTypes.object,
}

export default LoginPage;

