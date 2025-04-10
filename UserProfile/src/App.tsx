
import "./App.css"
import UserCard from "./components/User";

function App() {

  return (
    <>
     <div className="flex flex-col items-center gap-4 p-8">
       <UserCard
        id="1"
        name="John Doe"
        email="john.doe@example.com"
        role="admin"
        isOnline={true}
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
        bio="Passionate developer and tech enthusiast."
      />
      <UserCard
        id="2"
        name="Jane Smith"
        email="jane.smith@example.com"
        role="user"
        isOnline={false}
        avatar="https://randomuser.me/api/portraits/women/2.jpg"
        bio="A casual visitor exploring the platform."
      />
      <UserCard
        id="3"
        name="Guest User"
        email="guest@example.com"
        role="guest"
        isOnline={true}
        avatar="https://randomuser.me/api/portraits/men/3.jpg"
        bio="A casual visitor exploring the platform."
      />
      </div> 
    
    </>
  ) 
}

export default App
