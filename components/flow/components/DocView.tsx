import { Button } from '@mui/material';
import  { useState, useEffect } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import {selected_pdfReducer , app_statusReducer , current_selected_flow} from "@/store"
import {get_document , downloadPdf} from "@/services/storage/documents"

  
//PDFjs worker from an external cdn
// const url = "https://nxjantewymzaubarsati.supabase.co/storage/v1/object/sign/fkows-images/Sockets.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJma293cy1pbWFnZXMvU29ja2V0cy5wZGYiLCJpYXQiOjE2NzYzOTE2NDgsImV4cCI6MTY3Njk5NjQ0OH0.1fZ9jF03JFk1VSqD9TfsstcPl4ch0yXiSrtV7SCg6n8&t=2023-02-14T15%3A23%3A27.998Z"
  
export default function DocView() {

  const [url , setUrl ] = useState<string>("")

  const state = selected_pdfReducer(state  => state.id)

  const set_loader = app_statusReducer(state => state.set_loading)

  const flow_id = current_selected_flow(state => state.id)

  useEffect(()=>{
    //hadle adding fetch 
    //flow id and project is

    console.log(flow_id)
    console.log(state)

    const data = get_document(flow_id , state)
    if(!data) return 
    setUrl(data)


  },[flow_id ,state ])
      
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
     const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }:{numPages:any}) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (

    <div className='w-full flex flex-col '>
    <div className='w-full h-[120px] bg-white flex justify-end py-2 px-8'>
    <Button 
    onClick={async () => {
      console.log("clicked")
      await downloadPdf(flow_id , state)
    }}
    variant="contained" className='!bg-sky-600 h-[40px]' >
    download
    </Button>

    </div>
    
     
        <Document
        className="overflow-y-scroll flex justify-center bg-white w-full "
         file={url}
         onLoadSuccess={onDocumentLoadSuccess}
         >
         <Page
          className="shadow-xl "
         pageNumber={pageNumber} />
       </Document>
      
    
    
     
      </div>
  
  );
}