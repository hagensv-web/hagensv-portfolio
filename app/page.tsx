import StyledLink from "@/components/core/StyledLink";
import SkillsWidget from "@/components/features/skills/SkillsWidget";
import { Metadata } from "next";
import TwoColumnLayout from "@/components/core/TwoColumnLayout";

export const metadata: Metadata = {
  title: "Hello World!",
  description: "Learn about me and the things I enjoy doing"
}

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10">
      <TwoColumnLayout
        mobileFirst="right"
        leftContent={
          <div>
            <img src="/keyboard.jpg" alt="Half a keyboard with a coffee mug" fetchPriority="high" loading="eager" />
            <p>Photo by <StyledLink href="https://unsplash.com/@nublson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nubelson Fernandes</StyledLink> on <StyledLink href="https://unsplash.com/photos/black-and-white-ceramic-mug-on-black-table--Xqckh_XVU4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</StyledLink></p>
          </div>
        }
        rightContent={
          <div>
            <h1>Hello, World!</h1>
            <p>My name is Samuel Hagen (HagenSV). I graduated Cum Laude from Grove City College in 2026, with a major in Computer Science and minors in Mobile Development and Cybersecurity.</p>
            <p>I am a programming enthusiast. I love to create, push my skills, and learn new things. I love almost all things programming: front-end, back-end, mobile, web, you name it. If you would like to see what I am currently working on, check out my <StyledLink href={"/projects"}>projects</StyledLink>.</p>
          </div>
        } />

      <TwoColumnLayout
        mobileFirst="left"
        leftContent={
          <div>
            <h2>Looking to hire?</h2>
            <p>That's great! I am in the market for a job. Whether you need to fill a role in frontend, backend, full stack, or quality assurance, I am confident that I can meet your needs.</p>
            <p>I would love to hear from you. If you would like to get in contact feel free to <StyledLink href="mailto:samuel@hagensv.dev" rel="nofollow">send me an email.</StyledLink></p>
          </div>
        }
        rightContent={
          <div>
            <img src="/application.jpg" alt="a person filling out an application" loading="lazy"/>
          </div>
        } />

      <TwoColumnLayout
        mobileFirst="right"
        leftContent={
          <div>
            <img src="/website.jpg" alt="A laptop on a wooden desk" loading="lazy" />
            <p>Photo by <StyledLink href="https://unsplash.com/@carzmaiquez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carriza Maiquez</StyledLink> on <StyledLink href="https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-wooden-desk-RTdvy9izXvw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</StyledLink></p>
          </div>
        }
        rightContent={
          <div>
            <h2>Do you need a website?</h2>
            <p>I excel at making static websites and web apps that dont rely on a backend. If you need a website that fits this criteria, feel free to reach out, I would love to build it for you and help your dreams come true! Don't know your site requirements? Contact me anyway. I would be happy to help you work through it.</p>
          </div>
        } />

      <div className="md:px-20">
        <h2>Projects</h2>
        <p>When it comes to programming, and life in general, my two biggest motivators are learning and problem solving. This fact is clearest when lookig at my projects. Throughout my education, I had the incredible opportunity to work on many complex and interesting projects, both inside and outside of class. These projects utilitzed a wide variety of programming languages and tools as I expanded my skill set. Some projects are even targeted at solving practical problems for the average person, such as one of my personal favorites: Where's My Movie?</p>
      </div>

      <div>
        <h2>Top Skills</h2>
        <SkillsWidget />
      </div>
    </div>
  );
}
