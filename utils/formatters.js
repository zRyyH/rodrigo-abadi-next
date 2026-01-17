export function formatarData(dataISO) {
    const data = new Date(dataISO);

    return data.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).replace(',', '');
}

export function formatarReal(valor) {
    return Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

export function formatarCEST(cest) {
    cest = String(cest).padStart(7, '0').replace(/\D/g, '');
    return cest.replace(/^(\d{2})(\d{3})(\d{2})$/, '$1.$2.$3');
}

export function formatarNCM(ncm) {
    ncm = String(ncm).padStart(8, '0').replace(/\D/g, '');
    return ncm.replace(/^(\d{2})(\d{2})(\d{2})(\d{2})$/, '$1.$2.$3.$4');
}