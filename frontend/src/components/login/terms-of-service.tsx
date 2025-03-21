"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsOfServiceProps {
  onAccept?: () => void;
  onDecline?: () => void;
  showButtons?: boolean;
}

export default function TermsOfService({
  onAccept,
  onDecline,
  showButtons = true,
}: TermsOfServiceProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Terms of Service</CardTitle>
        <CardDescription>Last updated: {currentDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold">1. Introduction</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Welcome to our social media platform. By accessing or using our
                service, you agree to be bound by these Terms of Service. Please
                read them carefully.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">2. Account Registration</h3>
              <p className="text-sm text-muted-foreground mt-2">
                To use our service, you must create an account. You are
                responsible for maintaining the confidentiality of your account
                information and for all activities that occur under your
                account.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>You must be at least 13 years old to use this service</li>
                <li>
                  You must provide accurate and complete information when
                  creating your account
                </li>
                <li>
                  You are responsible for the security of your account and
                  password
                </li>
              </ul>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">3. User Content</h3>
              <p className="text-sm text-muted-foreground mt-2">
                You retain ownership of any content you post on our platform.
                However, by posting content, you grant us a non-exclusive,
                royalty-free license to use, display, and distribute your
                content in connection with our service.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                You are solely responsible for the content you post and the
                consequences of sharing it.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">4. Prohibited Content</h3>
              <p className="text-sm text-muted-foreground mt-2">
                The following types of content are prohibited on our platform:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>
                  Content that violates any applicable laws or regulations
                </li>
                <li>
                  Content that promotes discrimination, hatred, or violence
                </li>
                <li>Content that infringes on intellectual property rights</li>
                <li>Spam, scams, or misleading content</li>
                <li>
                  Content that contains personal or private information about
                  others without their consent
                </li>
                <li>Explicit or adult content</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">5. Privacy</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Our Privacy Policy explains how we collect, use, and protect
                your personal information. By using our service, you agree to
                our Privacy Policy.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">6. Termination</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We reserve the right to suspend or terminate your account at any
                time for violations of these Terms of Service or for any other
                reason at our discretion.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">7. Changes to Terms</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We may modify these Terms of Service at any time. We will notify
                users of any significant changes. Your continued use of our
                service after such modifications constitutes your acceptance of
                the updated terms.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">
                8. Limitation of Liability
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Our service is provided "as is" without warranties of any kind.
                We are not liable for any damages arising from your use of our
                service.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">9. Contact Us</h3>
              <p className="text-sm text-muted-foreground mt-2">
                If you have any questions about these Terms of Service, please
                contact us at support@yoursocialmedia.com.
              </p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>

      {showButtons && (
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline" onClick={onDecline}>
            Decline
          </Button>
          <Button onClick={onAccept}>Accept Terms</Button>
        </CardFooter>
      )}
    </Card>
  );
}
