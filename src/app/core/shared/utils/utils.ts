export class Utils {

    public static getAvg(list: number[]) {
        const sum = list.reduce((previous, current) => current += previous, 0);
        return (sum / list.length);
      }

      public static getDesvest(arr: number[]) {

        
          let mean = arr.reduce((acc, curr)=>{
            return acc + curr
          }, 0) / arr.length;
           
          arr = arr.map((k)=>{
            return (k - mean) ** 2
          })
           
         let sum = arr.reduce((acc, curr)=> acc + curr, 0);
         // Retorna la desviacion estandar
         return Math.sqrt(sum / arr.length)
        }

        public static dateDeathProbabl(ageClient: number) {
          const lifeExpentancyArgentina = 76.8;
          const yearofLiveProbably = lifeExpentancyArgentina - ageClient;
          const dateDeath = new Date();
          dateDeath.setFullYear(dateDeath.getFullYear() + yearofLiveProbably)
          return dateDeath.toLocaleDateString('en-US'); 

        }
        
        
}
