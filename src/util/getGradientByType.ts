export const getGradientByType = (type: string): string => {
  const gradients: { [key: string]: string } = {
    불꽃: `linear-gradient(145deg, #FF6A4D 0%, #F05338 30%, #D43A2A 60%, #B72515 85%, #8A1505 100%)`,
    물: `linear-gradient(145deg, #4EBBFF 0%, #37A5F0 30%, #278ACE 60%, #1662A8 85%, #0A4F96 100%)`,
    풀: `linear-gradient(145deg, #5AFF55 0%, #42DB45 30%, #2EAD32 60%, #1D7F24 85%, #107519 100%)`,
    전기: `linear-gradient(145deg, #FFE066 0%, #F5C944 30%, #E6B02F 60%, #C08F1A 85%, #8A6D00 100%)`,
    얼음: `linear-gradient(145deg, #B8FFFF 0%, #90EFFF 30%, #6CD8E8 60%, #3BAAC0 85%, #0A7B9E 100%)`,
    격투: `linear-gradient(145deg, #EC5A4A 0%, #D64638 30%, #C13428 60%, #A0201A 85%, #751711 100%)`,
    독: `linear-gradient(145deg, #D070E6 0%, #B658C6 30%, #9444A6 60%, #713085 85%, #5E2385 100%)`,
    땅: `linear-gradient(145deg, #E9CC94 0%, #D5B076 30%, #B78E58 60%, #916C40 85%, #705830 100%)`,
    비행: `linear-gradient(145deg, #B8D8FF 0%, #98C4F0 30%, #7AA8E0 60%, #5C84C8 85%, #3E6CB0 100%)`,
    에스퍼: `linear-gradient(145deg, #FF98C6 0%, #E87DA8 30%, #D0608A 60%, #B04068 85%, #A03365 100%)`,
    벌레: `linear-gradient(145deg, #C0D85F 0%, #A8C04F 30%, #8EA83F 60%, #709030 85%, #597620 100%)`,
    바위: `linear-gradient(145deg, #D8C698 0%, #C2AC80 30%, #A88C68 60%, #866C50 85%, #705838 100%)`,
    고스트: `linear-gradient(145deg, #9974D0 0%, #8662B8 30%, #724FA0 60%, #5E3C88 85%, #3E2670 100%)`,
    드래곤: `linear-gradient(145deg, #A080F8 0%, #8A6AE0 30%, #7354C8 60%, #5C3EB0 85%, #402098 100%)`,
    악: `linear-gradient(145deg, #707070 0%, #606060 30%, #505050 60%, #303030 85%, #202020 100%)`,
    강철: `linear-gradient(145deg, #D0D0F0 0%, #B8B8D8 30%, #9C9CC0 60%, #7E7EA0 85%, #686890 100%)`,
    페어리: `linear-gradient(145deg, #FFC0FF 0%, #EFA0EF 30%, #D080D0 60%, #B060B0 85%, #A050A8 100%)`,
  };

  return (
    gradients[type] ||
    `linear-gradient(145deg, #C0C0B0 0%, #AFAF98 30%, #9A9A88 60%, #808078 85%, #606060 100%)`
  ); // 기본값(노멀 타입)
};
