/** @format */

import ContactMe from '@/app/ui/dashboard/contact_me';
import Intro from '@/app/ui/dashboard/intro';
import IntroHeader from '@/app/ui/dashboard/intro-header';

const Page: React.FC = () => {
	return (
		<div className='flex flex-col gap-36'>
			<ContactMe />
			<section
				className='section'
				id='emailMe'
			>
				<div className='container text-center'>
					<h6 className='section-title mb-5'>Send Me Message</h6>
					{/* <!-- contact form --> */}
					<form
						id='contact-form'
						action='submit'
						className='contact-form col-md-10 col-lg-8 m-auto'
					>
						<div className='form-row'>
							<div className='form-group col-sm-6'>
								{/* <!--HIDEN FIELD--> */}
								<input
									type='hidden'
									name='contact_number'
								/>
								{/* <!--USER_NAME--> */}
								<input
									className='form-control'
									type='text'
									id='user_name'
									name='user_name'
									placeholder='Your Name'
									size={50}
									required
								/>
							</div>

							{/* <!--USER_EMAIL--> */}
							<div className='form-group col-sm-6'>
								<input
									className='form-control'
									type='email'
									id='user_email'
									name='user_email'
									placeholder='Enter Email'
									required
								/>
							</div>

							<div className='form-group col-sm-12'>
								<textarea
									className='form-control'
									id='message'
									name='message'
									placeholder='Write Something'
									rows={6}
								></textarea>
							</div>

							<div className='form-group col-sm-12 mt-3'>
								<input
									type='submit'
									value='Send'
									className='btn btn-outline-primary rounded'
								/>
							</div>
						</div>
					</form>
					<div
						id='success-message'
						className='alert alert-success'
						style={{ display: 'none' }}
					>
						Your message has been sent successfully.
					</div>
					{/* <!-- end of contact form --> */}
				</div>
				{/* <!-- end of container --> */}
			</section>
			{/* <!-- end of send me message section --> */}
		</div>
	);
};

export default Page;
