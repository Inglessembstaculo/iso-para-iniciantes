import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AppInglesIniciantes() {
  const [progresso, setProgresso] = useState(10);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Aprenda Inglês do Zero (A1 a A2)</h1>

      <Progress value={progresso} className="mb-6" />

      <Tabs defaultValue="gramatica" className="w-full">
        <TabsList className="grid grid-cols-6">
          <TabsTrigger value="gramatica">Gramática</TabsTrigger>
          <TabsTrigger value="speaking">Speaking</TabsTrigger>
          <TabsTrigger value="pronuncia">Pronúncia</TabsTrigger>
          <TabsTrigger value="vocabulario">Vocabulário</TabsTrigger>
          <TabsTrigger value="listening">Listening</TabsTrigger>
          <TabsTrigger value="revisao">Revisão</TabsTrigger>
        </TabsList>

        <TabsContent value="gramatica">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Gramática Essencial</h2>
              <ul className="list-disc list-inside">
                <li>Presente Simples (Simple Present)</li>
                <li>Verbo To Be</li>
                <li>Pronomes pessoais</li>
                <li>Plural: regular e irregular</li>
                <li>Preposições de tempo e lugar</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="speaking">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Frases mais usadas</h2>
              <ul className="space-y-2">
                <li>What’s your name? – Qual é o seu nome?</li>
                <li>How are you? – Como você está?</li>
                <li>I’m fine, thank you. – Estou bem, obrigado.</li>
                <li>Where are you from? – De onde você é?</li>
                <li>I don’t understand. – Eu não entendo.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pronuncia">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Dificuldades na Pronúncia</h2>
              <p>Palavras com o som do "TH":</p>
              <ul className="list-disc list-inside">
                <li>Think, Thought, Thanks</li>
                <li>This, That, Them</li>
              </ul>
              <p>Palavras com mesma pronúncia, significados diferentes (homophones):</p>
              <ul className="list-disc list-inside">
                <li>Two, To, Too</li>
                <li>There, Their, They’re</li>
              </ul>
              <p>Incluiremos áudios e animações com a boca para praticar cada som.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vocabulario">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Expansão de Vocabulário</h2>
              <p>Palavra: <strong>Happy</strong></p>
              <p>Significado: Feliz</p>
              <p>Sinônimo: Joyful</p>
              <p>Antônimo: Sad</p>
              <p>Situação: "I’m very happy today because it’s my birthday!"</p>
              <img src="/images/happy_birthday.png" alt="Situação feliz" className="rounded-lg w-60" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="listening">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Diálogo com Áudio</h2>
              <audio controls src="/audio/dialogo1.mp3" className="w-full" />
              <div className="bg-gray-100 p-3 rounded">
                <p><strong>John:</strong> Hi, how are you?</p>
                <p><strong>Mary:</strong> I’m fine, thank you. And you?</p>
                <p><strong>John:</strong> I’m good. Where are you from?</p>
                <p><strong>Mary:</strong> I’m from Brazil.</p>
              </div>
              <p className="text-sm text-gray-600">Clique nas falas para ouvir novamente frase por frase.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revisao">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Revisão Inteligente</h2>
              <p>
                Aqui vamos mostrar as palavras e frases que você errou com mais frequência,
                seguindo a curva do esquecimento, para reforçar sua memorização.
              </p>
              <p className="mt-4">Você poderá revisar em 24h, 3 dias, 7 dias e 30 dias após o estudo.</p>
              <Button className="mt-4">Começar Revisão</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
