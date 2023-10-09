"use client";
import TopicsList from "@/components/TopicsList";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/api/user')
      .then(res => res.json())
      .then(users => setUsers(users.users))
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <TopicsList />
      <TopicsList />
      {
        users.length > 0 && users.map(user => {
          return (
            <li>{user.name}</li>
          )
        })
      }
    </>
  )
}
