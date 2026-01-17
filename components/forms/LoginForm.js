"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { LockIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm({
    formData = {},
    setFormData,
    onSubmit,
    loading = false,
    onForgotPassword,
    onSignUp,
    onGoogleSignIn
}) {
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">LOGIN</CardTitle>
                <CardDescription>
                    INSIRA SUAS CREDENCIAIS PARA ACESSAR A CONTA
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">EMAIL</Label>
                        <div className="relative">
                            <MailIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="nome@exemplo.com"
                                className="pl-10"
                                value={formData.email || ""}
                                onChange={(e) => handleChange("email", e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">SENHA</Label>
                            {onForgotPassword && (
                                <Button
                                    type="button"
                                    variant="link"
                                    className="h-auto p-0 text-sm"
                                    onClick={onForgotPassword}
                                    disabled={true}
                                >
                                    ESQUECEU A SENHA?
                                </Button>
                            )}
                        </div>
                        <div className="relative">
                            <LockIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="DIGITE SUA SENHA"
                                className="pl-10"
                                value={formData.password || ""}
                                onChange={(e) => handleChange("password", e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? (
                            <>
                                <Spinner className="mr-2" />
                                ENTRANDO...
                            </>
                        ) : (
                            "Entrar"
                        )}
                    </Button>

                    {onGoogleSignIn && (
                        <>
                            <div className="relative">
                                <Separator />
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                                    OU
                                </span>
                            </div>

                            <Button
                                type="button"
                                variant="outline"
                                className="w-full"
                                onClick={onGoogleSignIn}
                                disabled={true}
                            >
                                CONTINUAR COM GOOGLE
                            </Button>
                        </>
                    )}
                </form>
            </CardContent>

            {onSignUp && (
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-muted-foreground">
                        NÃO TEM UMA CONTA?{" "}
                        <Button
                            type="button"
                            variant="link"
                            className="h-auto p-0 text-sm font-medium"
                            onClick={onSignUp}
                            disabled={true}
                        >
                            CADASTRAR-SE
                        </Button>
                    </p>
                </CardFooter>
            )}
        </Card>
    );
}