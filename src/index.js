import { BuildOptions, createLambda } from '@vercel/build-utils';

export const version = 3;

export async function build(options) {
  // Build the code here…

  // const lambda = await createLambda(/* … */);
  return {
    output: (req, res) => { res.send('simples lambda') },
    // watch: [
    //   // Dependent files to trigger a rebuild in `vercel dev` go here…
    // ],
    // routes: [
    //   // If your Runtime needs to define additional routing, define it here…
    // ],
  };
}
