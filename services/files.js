import { express } from '@/lib/express';

export const filesService = {
    upload: async (files) => {
        const pdfOld = files.pdf;
        const blobPdf = new Blob([pdfOld], { type: 'application/zip' });
        const pdf = new File([blobPdf], pdfOld.name, { type: 'application/zip' });

        const xmlOld = files.xml;
        const blobXml = new Blob([xmlOld], { type: 'application/zip' });
        const xml = new File([blobXml], xmlOld.name, { type: 'application/zip' });

        const formData = new FormData();

        formData.append('sales_xlsx', files.sales);
        formData.append('nfes_xlsx', files.nfes);
        formData.append('pdf_zip', pdf);
        formData.append('xml_zip', xml);

        return await express.post('/api/upload', formData);
    }
};