"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { LockIcon, MailIcon } from "lucide-react";

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
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>
                    Insira suas credenciais para acessar sua conta.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
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
                            <Label htmlFor="password">Senha</Label>
                            {onForgotPassword && (
                                <Button
                                    type="button"
                                    variant="link"
                                    className="h-auto p-0 text-sm"
                                    onClick={onForgotPassword}
                                    disabled={true}
                                >
                                    Esqueceu a senha?
                                </Button>
                            )}
                        </div>
                        <div className="relative">
                            <LockIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
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
                                Entrando...
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
                                Continuar com o Google
                            </Button>
                        </>
                    )}
                </form>
            </CardContent>

            {onSignUp && (
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-muted-foreground">
                        Não tem uma conta?{" "}
                        <Button
                            type="button"
                            variant="link"
                            className="h-auto p-0 text-sm font-medium"
                            onClick={onSignUp}
                            disabled={true}
                        >
                            Cadastrar-se
                        </Button>
                    </p>
                </CardFooter>
            )}
        </Card>
    );
}