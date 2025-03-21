import { ArrowUpIcon } from "lucide-react";
import Logo from "@/components/shared/logo";
import { SOCIAL_LISTS } from "@/lib/lists/social-lists";
import EmailForm from "../form/email.form";
import { FOOTER_LISTS } from "@/lib/lists/footer-lists";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full flex-col justify-center items-center border-t border-t-neutral-300">
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-10 p-10">
        <div className="flex flex-col w-full md:w-1/2 justify-start items-start gap-3">
          <Logo withText className="w-36" />
          <p className="text-base tracking-tighter text-neutral-500">
            Developer Student Society is a community of developers who are
            passionate about technology and learning. We aim to provide a
            environment for students to learn, build and grow.
          </p>
          <ul className="flex gap-3 w-full">
            {SOCIAL_LISTS.map((social) => (
              <li
                key={social.id}
                className="border border-neutral-300 p-2 rounded-md flex justify-center items-center"
              >
                <a href={social.url} target="_blank" rel="noreferrer">
                  <social.component className="w-5 h-5" color="5b5b5b" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-1/3 justify-start items-end gap-5">
          <EmailForm />
          <div className="flex w-full justify-start items-start gap-10">
            {FOOTER_LISTS.map((list) => (
              <div
                key={list.id}
                className="flex flex-col justify-center items-start"
              >
                <h4 className="text-sm font-semibold text-neutral-600">
                  {list.title}
                </h4>
                <ul className="flex flex-col justify-center items-start">
                  {list.subMenu.map((sub) => (
                    <li key={sub.id}>
                      <a
                        href={sub.route}
                        className="text-xs text-neutral-500 hover:text-neutral-600"
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-3 bg-neutral-800 text-white">
        <p className="text-center text-xs">
          ©2024-25 Developer Student Society
        </p>
        <button
          className="ml-2"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default FooterSection;
