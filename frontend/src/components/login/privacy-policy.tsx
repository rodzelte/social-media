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

interface PrivacyPolicyProps {
  onAccept?: () => void;
  onDecline?: () => void;
  showButtons?: boolean;
}

export default function PrivacyPolicy({
  onAccept,
  onDecline,
  showButtons = true,
}: PrivacyPolicyProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Privacy Policy</CardTitle>
        <CardDescription>Last updated: {currentDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold">
                1. Information We Collect
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                We collect information you provide when you create an account
                and use our service, including:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Account information (name, email, username, password)</li>
                <li>Profile information (profile picture, bio)</li>
                <li>Content you post (photos, videos, comments)</li>
                <li>Communications with other users</li>
                <li>Usage information and device data</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">
                2. How We Use Your Information
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Provide and improve our service</li>
                <li>Personalize your experience</li>
                <li>Communicate with you</li>
                <li>Ensure safety and security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">3. Information Sharing</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Other users (according to your privacy settings)</li>
                <li>Service providers who help us operate our platform</li>
                <li>Law enforcement when required by law</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">4. Your Choices</h3>
              <p className="text-sm text-muted-foreground mt-2">You can:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Access and update your account information</li>
                <li>Control your privacy settings</li>
                <li>Delete your account</li>
                <li>Opt out of promotional communications</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">5. Data Security</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We implement reasonable security measures to protect your
                information. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">6. Children's Privacy</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Our service is not intended for children under 13. We do not
                knowingly collect information from children under 13.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">
                7. Changes to This Policy
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes.
              </p>
            </section>

            <Separator />

            <section>
              <h3 className="text-lg font-semibold">8. Contact Us</h3>
              <p className="text-sm text-muted-foreground mt-2">
                If you have any questions about this Privacy Policy, please
                contact us at privacy@yoursocialmedia.com.
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
          <Button onClick={onAccept}>Accept Policy</Button>
        </CardFooter>
      )}
    </Card>
  );
}
