import { useState, useRef } from "react";
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    subject: '',
    message: ''
  });
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Email from: ${form.name} - ${form.subject}`);
    const body = encodeURIComponent(form.message);

    window.open(`mailto:aliarous617@gmail.com?subject=${subject}&body=${body}`);
    setForm({
      name: '',
      subject: '',
      message: ''
    });
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.heroSubText}`}>Get in touch</p>
        <h3 className={`${styles.heroHeadText}`}>Contact Me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
                           rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's your email about?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
                           rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white
                           rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
                         shadow-md shadow-primary rounded-xl
                         hover:brightness-200 hover:text-secondary transition ease-in duration-100"
          >
            Send me an email!
          </button>
        </form>
      </div>

      {!isMobile &&
        <div
          // variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </div>
      }
    </div>
  )
}

const Export = SectionWrapper(Contact, 'contact');
export default Export;