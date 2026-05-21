import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const L3v3guideCommand: Command = {
    id: 'L3v3guide.command',
    label: 'l3v3 GuIDE'
};

@injectable()
export class L3v3guideCommandContribution implements CommandContribution {
    
    @inject(MessageService)
    protected readonly messageService!: MessageService;

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(L3v3guideCommand, {
            execute: () => this.messageService.info('GuIDE!')
        });
    }
}

@injectable()
export class L3v3guideMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: L3v3guideCommand.id,
            label: L3v3guideCommand.label
        });
    }
}
