const brlFormatterNative = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
});

export const brlFormatter = {
    format: (value: number) => brlFormatterNative.format(value / 100)
}