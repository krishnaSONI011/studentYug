import UserCard from "./UserCard";



 
export default function MainContainer() {
  return (
    <>
    <div className="ml-[30vw] md:ml-[15vw] lg:ml-[23vw]  w-full mx-auto flex  flex-col gap-6">
      {[
        {
          name: "John Doe",
          schoolName: "Springfield High School",
          avatarSrc: "/studentImage.webp",
          postImageSrc: "/student.jpeg",
        },
        {
          name: "Jane Smith",
          schoolName: "Riverdale Academy",
          avatarSrc: "/studentImage.webp",
          postImageSrc: "/student.jpeg",
        },
        {
          name: "Arjun Patel",
          schoolName: "Greenwood Public School",
          avatarSrc: "/studentImage.webp",
          postImageSrc: "/student.jpeg",
        },
      ].map((card, idx) => (
        <UserCard
          key={idx}
          name={card.name}
          schoolName={card.schoolName}
          avatarSrc={card.avatarSrc}
          postImageSrc={card.postImageSrc}
        />
      ))}
    </div>
   
    </>
  );
}
