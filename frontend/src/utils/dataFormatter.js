export const formatEnrolmentAgeData = (data) => {
    if (!data) return [];
    return data.map(item => ({
        name: formatAgeLabel(item['Unnamed: 0']),
        value: item['0'],
        rawName: item['Unnamed: 0']
    }));
};

const formatAgeLabel = (label) => {
    if (label === 'age_0_5') return '0-5 Years';
    if (label === 'age_5_17') return '5-17 Years';
    if (label === 'age_18_greater') return '18+ Years';
    return label;
};

export const formatStateData = (data, keyMap = {}) => {
    if (!data) return [];
    return data.map(item => {
        const newItem = { ...item };
        // Map keys if needed, e.g., 'bio_age_5_17' -> 'Child Updates'
        return newItem;
    });
};

export const formatMonthlyData = (data) => {
    if (!data) return [];
    // Assuming monthly data might have weird date formats, but looking at the file earlier would be better.
    // For now returning as is, will refine if necessary.
    return data;
}
