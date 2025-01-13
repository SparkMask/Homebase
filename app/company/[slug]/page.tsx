import { notFound } from "next/navigation";
import { allProducts } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};


export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProducts
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const product = allProducts.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header company={product} />
      <ReportView slug={product.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={product.body.code} />
      </article>
    </div>
  );
}
