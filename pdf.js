import PDFDocument from "pdfkit";

const generatePDF = () => {
  // Create a document
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  // Here, we're using blobStream to generate a blob
  doc.pipe(fs.createWriteStream("/path/to/file.pdf")); // write to PDF
  doc.pipe(res);
  // Add your PDF content here
  doc.fontSize(25).text("PDFKit with React Example", 100, 100);

  // HTTP response

  // add stuff to PDF here using methods described below...

  // finalize the PDF and end the stream
  doc.end();
};

export default generatePDF;
