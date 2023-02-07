import NewProject from "@/components/flows/pages/NewProject";
import Header from "@/components/shared/Header";
import PageLayout from "@/components/shared/PageLayout";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function create() {
    return (
      <>
      <Header />
      <PageLayout>
      <div className='w-full h-[70px] flex justify-center md:justify-start p-6 pl-8  items-center'>
    <h1 className='text-2xl font-bold '>creating a new project </h1>
    </div>
    <div className='w-full mih-h-fit flex justify-center '>
    <NewProject />
    </div>

      </PageLayout>
      </>
        
    )
}