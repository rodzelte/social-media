"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TermsOfService from "./terms-of-service";
import PrivacyPolicy from "./privacy-policy";

export default function TermsModalExample() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [accepted, setAccepted] = useState({
    terms: false,
    privacy: false,
  });

  const handleAcceptTerms = () => {
    setAccepted((prev) => ({ ...prev, terms: true }));
    setShowTerms(false);
  };

  const handleAcceptPrivacy = () => {
    setAccepted((prev) => ({ ...prev, privacy: true }));
    setShowPrivacy(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Legal Documents</h2>
        <p className="text-muted-foreground">
          Please review and accept our Terms of Service and Privacy Policy
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Dialog open={showTerms} onOpenChange={setShowTerms}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex gap-2 items-center">
              Terms of Service
              {accepted.terms && (
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <TermsOfService
              onAccept={handleAcceptTerms}
              onDecline={() => setShowTerms(false)}
            />
          </DialogContent>
        </Dialog>

        <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex gap-2 items-center">
              Privacy Policy
              {accepted.privacy && (
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <PrivacyPolicy
              onAccept={handleAcceptPrivacy}
              onDecline={() => setShowPrivacy(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="pt-4">
        <Button
          disabled={!accepted.terms || !accepted.privacy}
          className="w-full sm:w-auto"
        >
          Continue to Registration
        </Button>
        {(!accepted.terms || !accepted.privacy) && (
          <p className="text-sm text-muted-foreground mt-2">
            Please accept both the Terms of Service and Privacy Policy to
            continue
          </p>
        )}
      </div>
    </div>
  );
}
