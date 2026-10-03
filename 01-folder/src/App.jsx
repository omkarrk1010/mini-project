import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false,
    logo: "data:image/png;base64,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"
  },
  {
    id: 2,
    company: "Google",
    posted: "30 days ago",
    title: "Graphic Designer",
    tags: ["Part-Time", "Flexible Schedule"],
    salary: "$150–220k",
    location: "Kochi, India",
    saved: true,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iq1rjeI1_G4jRG6O_uENX1rCbgsQeCAMw5ySJBerjQ&s=10",
  },
  {
    id: 3,
    company: "Dribbble",
    posted: "18 days ago",
    title: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$85/hr",
    location: "Chennai, India",
    saved: false,
    logo: "https://cdn.simpleicons.org/dribbble",
  },
  {
    id: 4,
    company: "Figma",
    posted: "5 days ago",
    title: "UX Designer",
    tags: ["Full-Time", "In office"],
    salary: "$200–250k",
    location: "Bangalore, India",
    saved: true,
    logo: "https://cdn.simpleicons.org/figma",
  },
  {
    id: 5,
    company: "Airbnb",
    posted: "5 days ago",
    title: "Junior UI/UX Designer",
    tags: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "Delhi, India",
    saved: false,
    logo: "https://cdn.simpleicons.org/airbnb",
  },
  {
    id: 6,
    company: "Apple",
    posted: "5 days ago",
    title: "Graphic Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    salary: "$85–120k",
    location: "Kerala, India",
    saved: true,
    logo: "https://cdn.simpleicons.org/apple",
  },
];
  return (
    <div className='parent'>

       {arr.map(function(elem){
         return <Card company={elem.company} 
         posted = {elem.posted}
         title = {elem.title}
         tags = {elem.tags}
         salary = {elem.salary}
         location = {elem.location}
         saved = {elem.saved}
         logo = {elem.logo}
         />
       })}

    </div>
  )
}

export default App
