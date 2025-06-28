const coursMap: Record<string, any> = {

  // importer tout vos fichiers de cours : ../../assets/cours/*
  
  RGPD: require("../../assets/cours/rgpd.json"),
  Reseaux: require("../../assets/cours/reseaux.json"),
  VPN: require("../../assets/cours/vpn.json"),
};

export const getCours = async (matiere: string) => {
  return coursMap[matiere] ?? [];
};

export const getListeMatieres = () => {
  return Object.keys(coursMap);
};
