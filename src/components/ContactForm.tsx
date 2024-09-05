import Button from "./Button";

export default function ContactForm() {
  return (
    <form className="max-w-sm mx-auto flex flex-col gap-5">
      <div className="flex flex-col">
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          name="name"
          id="name"
          minLength={3}
          required
          className="border border-gray-500 rounded-lg py-1 px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          required
          className="border border-gray-500 rounded-lg py-1 px-3"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          minLength={3}
          required
          className="border border-gray-500 rounded-lg py-1 px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          className="border border-gray-500 rounded-lg py-1 px-3"
          minLength={3}
          id="message"
        ></textarea>
      </div>
      <Button text={"Submit"} />
    </form>
  );
}
