import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule, ButtonModule, CardModule, InputTextModule, ToastModule],
  providers: [MessageService],
  template: `
    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">
          PrimeNG + TailwindCSS Demo
        </h1>
        
        <!-- Example Card with PrimeNG + Tailwind -->
        <p-card 
          header="Configuration Test" 
          subheader="PrimeNG components styled with TailwindCSS"
          class="mb-6 shadow-lg">
          
          <div class="space-y-4">
            <!-- Input with Tailwind classes -->
            <div class="flex flex-col gap-2">
              <label class="text-sm font-medium text-gray-700">
                Sample Input
              </label>
              <input 
                pInputText 
                placeholder="Type something..." 
                class="w-full"
                [(ngModel)]="inputValue"
              />
            </div>
            
            <!-- Buttons with different variants -->
            <div class="flex gap-3 flex-wrap">
              <p-button 
                label="Primary" 
                (onClick)="showSuccess()"
                class="flex-1 min-w-[120px]">
              </p-button>
              
              <p-button 
                label="Secondary" 
                severity="secondary"
                (onClick)="showInfo()"
                class="flex-1 min-w-[120px]">
              </p-button>
              
              <p-button 
                label="Success" 
                severity="success"
                (onClick)="showWarn()"
                class="flex-1 min-w-[120px]">
              </p-button>
            </div>
            
            <!-- Status indicators -->
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                <span class="text-green-800 font-medium">
                  ✅ PrimeNG + TailwindCSS Integration Active
                </span>
              </div>
              <p class="text-green-700 text-sm mt-2">
                Components are using PrimeNG functionality with TailwindCSS styling
              </p>
            </div>
          </div>
        </p-card>
        
        <!-- Feature showcase -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <h3 class="font-semibold text-gray-800 mb-2">🎨 Theming</h3>
            <p class="text-gray-600 text-sm">
              Lara theme from &#64;primeuix/themes with TailwindCSS utilities
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <h3 class="font-semibold text-gray-800 mb-2">🔧 Components</h3>
            <p class="text-gray-600 text-sm">
              PrimeNG components with native TailwindCSS class support
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
            <h3 class="font-semibold text-gray-800 mb-2">📱 Responsive</h3>
            <p class="text-gray-600 text-sm">
              TailwindCSS responsive utilities work seamlessly
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <p-toast></p-toast>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ExampleComponent {
  inputValue: string = '';

  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'PrimeNG Toast with TailwindCSS styling!'
    });
  }

  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Configuration is working perfectly!'
    });
  }

  showWarn() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warning',
      detail: 'This is a warning message'
    });
  }
}