import React from 'react';

const ResourceHub = () => {
  return (
    <div className="min-h-screen w-screen bg-[#F1F8FC] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-[#2A9D8F] mb-8">Resource Hub</h1>
      <p className="text-lg text-[#607D8B] max-w-3xl text-center mb-8">
        Access our extensive library of articles, tools, and resources to maintain and improve your mental wellness. Everything you need is just a click away.
      </p>
      <div className="max-w-4xl text-left space-y-6">
        <h2 className="text-3xl font-semibold text-[#2A9D8F] mb-4">Featured Resources</h2>
        <div className="space-y-4">
          <a href="https://www.nami.org/Blogs" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              NAMI Blogs: Latest Research and Personal Stories
            </button>
          </a>
          <a href="https://www.rethink.org/news-and-stories/blogs/" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              Rethink Mental Illness Blogs: Perspectives from Lived Experiences
            </button>
          </a>
          <a href="https://psychcentral.com/blog" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              Psych Central Blog: Trustworthy Mental Health Topics
            </button>
          </a>
          <a href="https://www.verywellmind.com/the-best-mental-health-blogs-5205192" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              Verywell Mind: Top Mental Health Blogs
            </button>
          </a>
          <a href="https://www.happinesspsychiatrist.com/blog" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              The Happiness Psychiatrist Blog: Mental Health and Happiness
            </button>
          </a>
          <a href="https://www.activeminds.org/blog/" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              Active Minds Blog: Messages of Hope from Young Adults
            </button>
          </a>
          <a href="https://www.mentalhealth.org.uk/explore-mental-health/blogs" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              Mental Health Foundation Blogs: Analysis and Advice
            </button>
          </a>
          <a href="https://www.reddit.com/r/Blogging/comments/1e77cz4/life_lessons_and_mental_health_blogs/" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              Reddit: Life Lessons and Mental Health Blogs
            </button>
          </a>
          <a href="https://www.brainblogger.com" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
              Brain Blogger: Neuroscience and Mental Health News
            </button>
          </a>
        </div>
      </div>
      <a href="/">
        <button className="mt-6 bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
          Home Page
        </button>
      </a>
    </div>
  );
};

export default ResourceHub;
