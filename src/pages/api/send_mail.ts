import { sendMail } from "@/pages/services/mailServices";
const handler = async (req: { auth_data?: any; method?: any; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; end: { (arg0: string): void; new(): any; }; json: { (arg0: { error_code: string; message: any; }): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          "TEST",
          "testing@thealphagency.com",
          "THI IS A TEST FOR MY MEDIUM USERS"
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err:any) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;