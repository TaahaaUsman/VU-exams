import { facebook, linkedin } from '../constents';

const ContactUs = () => {
  return (
    <div className="overflow-hidden mt-10">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-xl mt-2">We'd love to hear from you!</p>
      </div>
      <div className="text-center p-10">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-lg mt-4">
          Email us at:{' '}
          <a
            href="https://mail.google.com/mail"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            taha.usman.ccl@gmail.com
          </a>
        </p>
        <div className="flex justify-center space-x-8 mt-6">
          <a
            href="https://www.linkedin.com/in/taahaa-usman/"
            target="_blank"
            className="flex justify-center items-center"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="w-16 h-16 hover:w-[58px] hover:h-[58px]"
            />
          </a>
          <a
            href="https://web.facebook.com/people/Taha-Usman/pfbid0N1q5VVAzu18FZNLXE9HysFfAhZQkSmCkfpnx9Bc1y84MrQ5n4icKHxJia1WPqs2fl/"
            target="_blank"
            className="flex justify-center items-center"
          >
            <img
              src={facebook}
              alt="facebook"
              className="w-16 h-16 hover:w-[58px] hover:h-[58px]"
            />
          </a>
        </div>
      </div>
      <div className="text-center py-16 px-8">
        <h2 className="text-4xl font-semibold text-blue-700">
          Let's Collaborate!
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          We are always open to new ideas and opportunities. Whether you have a
          suggestion or are interested in working together, reach out to us.
          Let's create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
