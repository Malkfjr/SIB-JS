function GajiBersih (golongan, statusmenikah) {
    let gajipokok;
    let tunjangan = 0;

    switch (golongan) {
        case 1:
            gajipokok = 10000000;
            break;
        case 2:
            gajipokok = 15000000;
            if (statusmenikah === 'menikah') {
                tunjangan = 2000000;
            }
            break;
        case 3:
            gajipokok = 20000000;
            break;
        default:
            return "Golongan Tidak Valid";
    }
    
    let GajiBersih = gajipokok + tunjangan;
    return GajiBersih;
}