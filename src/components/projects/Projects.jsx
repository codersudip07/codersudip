import React from 'react'
import Title from '../Title'
import Button from '../Button'

const Projects = () => {
    const projects = [
      {
        name: "Agency Website",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure molestias in officiis architecto magni?",
        img: "https://res.cloudinary.com/dozupkvv3/image/upload/v1770438195/Screenshot_2026-02-07_094651_oqgmhe.png",
      },
      {
        name: "E-Commerce Website",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure molestias in officiis architecto magni?",
        img: "https://i.pinimg.com/1200x/60/0e/f6/600ef6517cbfd703f969ea2bd1562cca.jpg",
      },
      {
        name: "E-Commerce Website",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure molestias in officiis architecto magni?",
        img: "https://i.pinimg.com/1200x/ac/ce/43/acce432983f6be70fc7deca947aa3dd6.jpg",
      },
    ];
  return (
    <>
      <section id='projects' className="w-full md:h-screen py-4 px-2 md:px-[5%]">
        <Title title="some projects" />
        <figure className="w-full h-[50vh] md:h-[95%] mt-4 pb-5 overflow-hidden">
          <div className="relative h-full overflow-y-auto hide-scrollbar rounded-2xl">
            {projects.map((item, index) => (
              <div
                key={index}
                title='View Project'
                className="sticky top-0 w-full h-full content-end bg-cover bg-center bg-green-900 rounded-2xl cursor-pointer z-10"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="p-5 md:p-15 bg-linear-to-t from-black to-black/20">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Button style="mt-5" name="View project" />
                </div>
              </div>
            ))}
          </div>
        </figure>
      </section>
    </>
  );
}

export default Projects