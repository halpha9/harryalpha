import { Project } from "../types";

export const ProjectsArray: Project[] = [
  {
    id: "m",
    image:
      "https://raw.githubusercontent.com/halpha9/halpha9/main/resources/img/bankist.png",
    name: "Alpha SMS",
    description:
      "Deployed Using AWS Route53, S3 and Cloudfront\nUses AWS Cognito, DynamoDB, Lambda Functions/Triggers and a CloudFront Content Distribution Network, to manage user Authentication JWT generation and refreshing.\nUsers are logged in through Cognito, using Lambda Triggers Provisioned by AWS CDK, they can then search for registered users and send messages, upload profile pictures and information, all while doing so with messages that are encrypted during transport and at rest.\nFrontend:  NextJs, Tailwind, React Query, Framer Motion, TypeScript, Amplify\nBackend: AWS (CDK, Lambda, CloudFront, S3, Route53, Certificate Manager, Cognito, API Gateway, and IAM)",
    tutorial: false,
    github: "https://github.com/halpha9/sms",
    skills: ["typescript", "react", "nextjs", "aws", "tailwind"],
  },
  {
    id: "b",
    name: "Bankist",
    image:
      "https://raw.githubusercontent.com/halpha9/halpha9/main/resources/img/bankist.png",
    description:
      "Deployed Using AWS Route53, S3 and Cloudfront\nUses AWS Cognito, DynamoDB, Lambda Functions/Triggers and a CloudFront Content Distribution Network, to manage user Authentication JWT generation and refreshing.\nUsers are logged in through Cognito, using Lambda Triggers Provisioned by AWS CDK, they can then search for registered users and send messages, upload profile pictures and information, all while doing so with messages that are encrypted during transport and at rest.\nFrontend:  NextJs, Tailwind, React Query, Framer Motion, TypeScript, Amplify\nBackend: AWS (CDK, Lambda, CloudFront, S3, Route53, Certificate Manager, Cognito, API Gateway, and IAM)",
    tutorial: false,
    github: "https://github.com/halpha9/sms",
    skills: ["typescript", "react", "nextjs", "aws", "tailwind"],
  },
  {
    id: "p",
    name: "Portfolio",
    image:
      "https://raw.githubusercontent.com/halpha9/halpha9/main/resources/img/bankist.png",
    description:
      "Deployed Using AWS Route53, S3 and Cloudfront\nUses AWS Cognito, DynamoDB, Lambda Functions/Triggers and a CloudFront Content Distribution Network, to manage user Authentication JWT generation and refreshing.\nUsers are logged in through Cognito, using Lambda Triggers Provisioned by AWS CDK, they can then search for registered users and send messages, upload profile pictures and information, all while doing so with messages that are encrypted during transport and at rest.\nFrontend:  NextJs, Tailwind, React Query, Framer Motion, TypeScript, Amplify\nBackend: AWS (CDK, Lambda, CloudFront, S3, Route53, Certificate Manager, Cognito, API Gateway, and IAM)",
    tutorial: false,
    github: "https://github.com/halpha9/sms",
    skills: ["typescript", "react", "nextjs", "aws", "tailwind"],
  },
];
