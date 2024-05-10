const About = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 xl:mb-14 flex-1">{` What's this site for?`}</h2>

      <p className="about-p text-xs sm:text-base xl:text-lg leading-loose flex-1">
        {`This site is a reference to all the back end technologies I've learnt, planning to learn or am currently learning. 
      I thought it would be a good idea to have a site that I can refer to when I need to remember how to do something. Or maybe it could 
      help someone else who is learning the same technologies. I plan to go in depth with each technology, so that I can understand it and don't
      need to refer to documentation or videos to relearn it. I also believe that me writing about it will help me understand it better. This
      site is also a good way to showcase my skills to potential employers. I hope to consistently update this site with new technologies and
      projects that I am working on. I hope you find this site useful!`}
      </p>
    </section>
  );
};

export default About;
