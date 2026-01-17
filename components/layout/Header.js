"use client";

import { useRouter } from 'next/navigation'
import { LogOutIcon, PackageIcon, ShoppingCartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { authService } from "@/services/auth";

export default function Header() {
    const router = useRouter()

    function logout() {
        authService.logout()
        router.push('/')
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fadeSlideIn">
            <div className="relative flex h-16 items-center justify-between w-full px-4">
                <div className="flex items-center gap-6">
                    <div className="font-semibold text-lg">RODRIGO ABADI</div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-9">
                                    <PackageIcon className="mr-2" />
                                    PRODUTOS
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-64 p-2">
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/products/create')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                CADASTRAR PRODUTO
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/products')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors"
                                            >
                                                ESTOQUE DE PRODUTO
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/invoices/create')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                CADASTRO FISCAL
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/invoices')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                ESTOQUE FISCAL
                                            </div>
                                        </NavigationMenuLink>

                                        <Separator className="my-2" />

                                        <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
                                            CONFIGURAÇÕES
                                        </div>
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/suppliers')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                FORNECEDORES
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/packages')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                EMBALAGENS
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/origins')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                ORIGENS
                                            </div>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-9">
                                    <ShoppingCartIcon className="mr-2" />
                                    VENDAS
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-64 p-2">
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/upload')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                INSERIR PLANILHA DE VENDAS
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/sales')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                VENDAS
                                            </div>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink className="block w-full">
                                            <div
                                                onClick={() => router.push('/nfes')}
                                                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm cursor-pointer transition-colors">
                                                ARQUIVOS NOTAS FISCAL
                                            </div>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <Button variant="outline" size="sm" onClick={logout}>
                    <LogOutIcon />
                    SAIR
                </Button>
            </div>
        </header>
    )
}