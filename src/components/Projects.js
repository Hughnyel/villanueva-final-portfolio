import React from 'react';

const Projects = () => {

  const openProject = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-600">Projects</h2>

      <div className="mt-4 grid md:grid-cols-2 gap-4">

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg">E-Commerce Site</h3>
          <p className="text-sm mt-2">Built with React</p>
          <button
            onClick={() => openProject("https://mir-s3-cdn-cf.behance.net/project_modules/hd/688018213023403.673f0550de7fc.png")}
            className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            View Project
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg">Personal Blog</h3>
          <p className="text-sm mt-2">Node.js project</p>
          <button
            onClick={() => openProject("https://colorlib.com/wp/wp-content/uploads/sites/2/amanda-rache-lee-resume-website-1024x829.jpg")}
            className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            View Project
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;