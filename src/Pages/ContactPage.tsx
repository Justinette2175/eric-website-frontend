import { BlockDisplayer } from "../Components/BlocksDisplayer";
import { ContactForm } from "../Components/ContactForm";
import { PageLayout } from "../Components/PageLayout";
import { useContactPageQuery } from "../ReactQuery/contactPage.queries";

export function ContactPage() {
  const { data } = useContactPageQuery();
  return (
    <PageLayout title={data?.title}>
      <div className="grid grid-flow-row gap-8">
        {data?.content?.blocks && (
          <BlockDisplayer blocks={data?.content?.blocks} />
        )}
        <ContactForm
          buttonText={data?.messageBouton}
          confirmationMessage={data?.confirmationEnvoi}
        />
      </div>
    </PageLayout>
  );
}
