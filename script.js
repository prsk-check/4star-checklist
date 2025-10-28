// 이미지 파일명 배열 (on 상태만, off는 _ 붙인 걸로 자동 계산)
const cat01Images = [
  '0101', '0102', '0103', '0104', '0105', '0106', '0107', '0108', '0109', '0110', '0111', '0112', '0113', '0114', '0115', '0116', '0117', '0118', '0119', '0120', '0121', '0122', '0123', '0124', '0125', '0126', '0127'
  // 추가로 넣고 싶은 이미지명 계속 이어서 적으면 됨
];

const cat02Images = [
  '0201', '0202', '0203', '0204', '0205', '0206', '0207', '0208', '0209', '0210', '0211', '0212', '0213', '0214', '0215', '0216', '0217', '0218', '0219', '0220', '0221', '0222', '0223'
  // 추가 이미지 계속 넣기
];

const cat03Images = ['0301', '0302', '0303', '0304', '0305', '0306', '0307', '0308', '0309', '0310', '0311', '0312', '0313', '0314', '0315', '0316', '0317', '0318', '0319', '0320', '0321', '0322', '0323', '0324', '0325'];
const cat04Images = ['0401', '0402', '0403', '0404', '0405', '0406', '0407', '0408', '0409', '0410', '0411', '0412', '0413', '0414', '0415', '0416', '0417', '0418', '0419', '0420', '0421', '0422', '0423'];
const cat05Images = ['0501', '0502', '0503', '0504', '0505', '0506', '0507', '0508', '0509', '0510', '0511', '0512', '0513', '0514', '0515', '0516', '0517', '0518', '0519', '0520', '0521', '0522', '0523', '0524' ];
const cat06Images = ['0601', '0602', '0603', '0604', '0605', '0606', '0607', '0608', '0609', '0610', '0611', '0612', '0613', '0614', '0615', '0616', '0617', '0618', '0619', '0620', '0621', '0622', '0623', '0624'];


function createCategoryImages(categoryId, imageNames) {
  const container = document.getElementById(categoryId);
  imageNames.forEach(name => {
    const onSrc = `images/${name}.png`;
    const offSrc = `images/${name}_.png`;

    const img = document.createElement('img');
    img.src = offSrc; // 초기 상태는 off
    img.dataset.on = onSrc;
    img.dataset.off = offSrc;

    img.addEventListener('click', () => {
      const currentSrc = img.getAttribute('src'); 
      img.src = currentSrc.includes('_') ? img.dataset.on : img.dataset.off;
    });

    container.appendChild(img);
  });
}


createCategoryImages('cat01', cat01Images);
createCategoryImages('cat02', cat02Images);
createCategoryImages('cat03', cat03Images);
createCategoryImages('cat04', cat04Images);
createCategoryImages('cat05', cat05Images);
createCategoryImages('cat06', cat06Images);

