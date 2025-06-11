export default function IdGenerator(projects){
  const existingIds = Object.keys(projects).map(Number);
  flag=0;
  for (let id = 1; id <= 100; id++) {
    if (!existingIds.includes(id)) {
      return id;
      flag=1;
    }
  }
  
  if(flag===0){
    return null;
  };
};